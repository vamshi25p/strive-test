// json2html.js
export default function json2html(data) {
  // Create the table with the required data-user attribute
  let html = '<table data-user="vamshikrishna788sai@gmail.com">';

  // Define the expected columns
  const columns = ['Name', 'Age', 'Gender'];

  // Create the table headers
  html += "<thead><tr>";
  columns.forEach((column) => {
    html += `<th>${column}</th>`;
  });
  html += "</tr></thead>";

  // Create the table body with data
  html += "<tbody>";
  data.forEach((item) => {
    html += "<tr>";
    columns.forEach((column) => {
      // Ensure each row has values for Name, Age, and Gender
      html += `<td>${item[column] || ''}</td>`; // If missing, show empty cell
    });
    html += "</tr>";
  });
  html += "</tbody>";

  // Close the table tag
  html += "</table>";

  return html;
}
