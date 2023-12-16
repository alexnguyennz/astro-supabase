import type { DevToolbarApp } from "astro";
import { createWindowElement } from "./utils.ts";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { SupabaseConfig } from "./index";
import { header } from "./components/header.ts";

import { tailwind } from "./styles/tailwind.ts";
import { styles } from "./styles/styles.ts";
import { main } from "./components/main.ts";

let supabase: SupabaseClient | null;
let SUPABASE_URL: string | null = null;
let SUPABASE_ANON_KEY: string | null = null;

interface Table {
  properties: { string: any };
  required: string[];
  type: "object";
}

let tables: Table[] | {} = {};

/* Get Supabase config from server (site) */
if (import.meta.hot) {
  import.meta.hot.on("astro-supabase:config", async (data: SupabaseConfig) => {
    const { supabaseUrl, supabaseKey } = data;
    SUPABASE_URL = supabaseUrl;
    SUPABASE_ANON_KEY = supabaseKey;

    supabase = createClient(supabaseUrl, supabaseKey);
  });
}

export default {
  id: "astro-supabase",
  name: "Astro Supabase",
  icon: "astro:logo",
  init(canvas, eventTarget) {
    eventTarget.addEventListener("app-toggled", async (event) => {
      if (!(event instanceof CustomEvent)) return;

      if (event.detail.state === true) {
        initCloseButton();

        await refreshTableList();
      }
    });

    async function refreshTableList() {
      // Get all tables
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/?apikey=${SUPABASE_ANON_KEY}`,
      );
      const data = await response.json();
      if (data) tables = data.definitions;

      const tableList = canvas.querySelector<HTMLElement>("#table-list");
      tableList?.replaceChildren();

      const fragment = document.createDocumentFragment();

      for (const table in tables) {
        const button = document.createElement("button");
        button.setAttribute("type", "button");
        button.id = table;
        button.textContent = table;

        button.addEventListener("click", () =>
          loadTable(table, tables[table].properties),
        );

        fragment.append(button);
      }

      tableList?.append(fragment);
    }

    async function loadTable(
      tableName: string,
      properties: { [key: string]: string },
    ) {
      const tableContainer =
        canvas.querySelector<HTMLButtonElement>("#table-container");
      if (!tableContainer || !supabase) return;
      tableContainer.replaceChildren();

      // Set active table styling
      const tableButtons = canvas.querySelectorAll(`#table-list button`);
      for (const table of tableButtons) {
        table.classList.remove("font-bold");
      }
      const tableButton = canvas.querySelector(`#${tableName}`);
      tableButton?.classList.add("font-bold");

      const table = document.createElement("table");
      table.classList.add("table");

      // Create Table Headings
      const thead = document.createElement("thead");
      const tr = document.createElement("tr");

      // create
      for (const key in properties) {
        const th = document.createElement("th");
        th.textContent = key;
        th.scope = "col";
        tr.append(th);
      }

      thead.append(tr);
      table.append(thead);
      // End Table Headings

      const { data } = await supabase.from(tableName).select();

      // Table Body
      const tbody = document.createElement("tbody");

      if (data && !data.length) {
        table.innerHTML = `No data. If there should be data, it is likely due to <a href="https://supabase.com/docs/guides/auth/row-level-security" target="_blank">RLS</a>.`;
      } else {
        for (const row of data!) {
          const tr = document.createElement("tr");

          for (const values of Object.values(row)) {
            const td = document.createElement("td");
            td.textContent = values;

            tr.append(td);
          }
          tbody.append(tr);
        }
      }

      table.append(tbody);

      tableContainer.append(table);
    }

    createWindow();
    document.addEventListener("astro:after-swap", createWindow);

    function createWindow() {
      const windowElement = createWindowElement(`
          ${tailwind}
          ${styles}
      
          ${header}
          ${main}
      `);

      canvas.append(windowElement);
    }

    function initCloseButton() {
      const closeButton =
        canvas.querySelector<HTMLButtonElement>("#close-button");
      if (!closeButton) return;

      closeButton.addEventListener("click", () => {
        eventTarget.dispatchEvent(
          new CustomEvent("toggle-plugin", {
            detail: {
              state: false,
            },
          }),
        );
      });
    }
  },
} satisfies DevToolbarApp;
