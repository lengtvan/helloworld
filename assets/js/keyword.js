function getKeyWords(articleId) {
  let keyword_retrieved = document.getElementById(articleId),
    keywords = {
      person: {},
      place: {},
      concept: {},
      publication: {},
      organization: {},
    },
    person = keyword_retrieved.getElementsByClassName("person"),
    place = keyword_retrieved.getElementsByClassName("place"),
    concept = keyword_retrieved.getElementsByClassName("concept"),
    publication = keyword_retrieved.getElementsByClassName("publication");

  // frequency distribution computation
  for (let i = 0; i < person.length; i++) {
    let newPerson = person[i].getAttribute("about");
    if (newPerson in keywords["person"]) {
      keywords["person"][newPerson] += 1;
      person[i].setAttribute(
        "id",
        `${newPerson}-mention-${keywords["person"][newPerson]}`
      );
      console.log(person[i]);
    } else {
      keywords["person"][newPerson] = 1;
      person[i].setAttribute(
        "id",
        `${newPerson}-mention-${keywords["person"][newPerson]}`
      );
      console.log(person[i]);
    }
  }

  for (let i = 0; i < place.length; i++) {
    let newPlace = place[i].getAttribute("about");
    if (newPlace in keywords["place"]) {
      keywords["place"][newPlace] += 1;
      place[i].setAttribute(
        "id",
        `${newPlace}-mention-${keywords["place"][newPlace]}`
      );
    } else {
      keywords["place"][newPlace] = 1;
      place[i].setAttribute(
        "id",
        `${newPlace}-mention-${keywords["place"][newPlace]}`
      );
    }
  }

  for (let i = 0; i < publication.length; i++) {
    let newPub = publication[i].getAttribute("about");
    if (newPub in keywords["publication"]) {
      keywords["publication"][newPub] += 1;
      publication[i].setAttribute(
        "id",
        `${newPub}-mention-${keywords["publication"][newPub]}`
      );
    } else {
      keywords["publication"][newPub] = 1;
      publication[i].setAttribute(
        "id",
        `${newPub}-mention-${keywords["publication"][newPub]}`
      );
    }
  }

  for (let i = 0; i < concept.length; i++) {
    let newConcept = concept[i].getAttribute("about");
    if (newConcept in keywords["concept"]) {
      keywords["concept"][newConcept] += 1;
      concept[i].setAttribute(
        "id",
        `${newConcept}-mention-${keywords["concept"][newConcept]}`
      );
    } else {
      keywords["concept"][newConcept] = 1;
      concept[i].setAttribute(
        "id",
        `${newConcept}-mention-${keywords["concept"][newConcept]}`
      );
    }
  }

  return keywords;
}
const referencePerson =
  document.getElementById("person-keywords").childNodes[1];
const referencePublication = document.getElementById("publication-keywords")
  .childNodes[1];
const referencePlace = document.getElementById("place-keywords").childNodes[1];
const referenceConcept =
  document.getElementById("concept-keywords").childNodes[1];
let prevItem;
function appendFrequency(articleId, category, parentNode) {
  getKeyWords(articleId);
  let keywords = getKeyWords(articleId);
  //append frequency to person keywords, set click events to link to keywords in article
  let dict = keywords[category];
  let item;

  Object.keys(dict).map(function (key, index) {
    var node = document.createElement("li");
    var childNode = document.createElement("a");
    var childNodeText = document.createTextNode(`${key}(${dict[key]})`);
    childNode.appendChild(childNodeText);
    node.appendChild(childNode);
    let i = 1;
    node.addEventListener("click", () => {
      console.log("prevItem", prevItem);
      if (prevItem) {
        prevItem.style.backgroundColor = "";
      }

      if (i > dict[key]) {
        alert("No further reference of this can be found.");
        prevItem.style.backgroundColor = "";
        i = 1;
      } else {
        item = document.getElementById(`${key}-mention-${i}`);
        console.log(item);
        item.style.backgroundColor = "#FDFF47";
        item.style.scrollMarginTop = "90px";
        item.scrollIntoView(true, { block: "start", inline: "start" });

        i++;
        prevItem = item;
      }
    });
    parentNode.appendChild(node);
  });
}

window.addEventListener(
  "load",
  appendFrequency("article1", "person", referencePerson)
);
window.addEventListener(
  "load",
  appendFrequency("article1", "publication", referencePublication)
);
window.addEventListener(
  "load",
  appendFrequency("article1", "place", referencePlace)
);
window.addEventListener(
  "load",
  appendFrequency("article1", "concept", referenceConcept)
);
