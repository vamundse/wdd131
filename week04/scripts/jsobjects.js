let aCourse = {
  code: "WDD131",
  title: "Dynamic Web Fundamentals",
  credits: 2,
  sections: [
    {section: "001", enrolled: 38, instructor: "Arnold Schwarzenegger"},
    {section: "002", enrolled: 67, instructor: "Arnold Palmer"}
  ]
};

function setCourseInformation(course) {
    document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`;
}

function sectionTemplate(section) {
    return  `<tr>
                <td>${section.section}</td>
                <td>${section.enrolled}</td>
                <td>${section.instructor}</td>
            </tr>`;
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections tbody").innerHTML = html.join("");
}

setCourseInformation(aCourse);
renderSections(aCourse.sections);
