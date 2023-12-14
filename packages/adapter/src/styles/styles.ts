export const styles = `
<style>
:host astro-dev-toolbar-window {
    max-width: 100%;
    width: 768px;
    height: 480px;
}

h1 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    color: #fff;
    margin: 0;
    font-size: 22px;
}

astro-dev-toolbar-icon {
    width: 1em;
    height: 1em;
    display: block;
}

hr {
    border: 1px solid rgba(27, 30, 36, 1);
    margin: 1em 0;
}

#table-list, #table {
    overflow-y: auto;
}

h2 {
    margin-bottom: 0;
    color: white;
    font-size: 18px;
}

a {
    color: rgba(224, 204, 250, 1);
}

a:hover {
    color: #f4ecfd;
}

#table-list {
   width: 100px;
}

#table-list button {
    display: block;
}

#table-container {
  max-height: 320px;
  height: 100%;
  overflow: auto;
}
</style>
`;
