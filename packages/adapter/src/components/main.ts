import { refreshIcon } from "./icons.ts";

export const main = `
<hr />		

<main id="content" class="flex gap-6">
    <div>
      <div class="flex justify-between items-center">
        <h2 id="page-name">Tables</h2>
        
        <button type="button" id="refresh-button" aria-label="refresh table">${refreshIcon}</button>
      </div>
      <section id="table-list"></section>
    </div>
    <section id="table-container" class="grow"></section>
</main>
`;
