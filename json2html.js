// json2html.js
export default function json2html(data) {
  // Create the table with the required data-user attribute
  let html = '<table data-user="vamshikrishna788sai@gmail.com">';

  // Create the table headers based on the keys in the first object
  html += "<thead><tr>";
  Object.keys(data[0]).forEach((key) => {
    html += `<th>${key}</th>`;
  });
  html += "</tr></thead>";

  // Create the table body with data
  html += "<tbody>";
  data.forEach((item) => {
    html += "<tr>";
    Object.keys(item).forEach((key) => {
      html += `<td>${item[key]}</td>`;
    });
    html += "</tr>";
  });
  html += "</tbody>";

  // Close the table tag
  html += "</table>";

  return html;
}
