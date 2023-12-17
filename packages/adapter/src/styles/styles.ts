export const styles = `
<style>
:host astro-dev-toolbar-window {
    max-width: 100%;
    width: 1024px;
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

hr {
    border: 1px solid rgba(27, 30, 36, 1);
    margin: 1em 0;
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

#close-button {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
}

#table-list {
  width: 100px;
}

#table-list button {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

#table-container {
  max-height: 356px;
  height: 100%;
  overflow: auto;
}

table {
  border-collapse: separate;
  border-spacing: 1em 0.5em;
}
</style>
`;
