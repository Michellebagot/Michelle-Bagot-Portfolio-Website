import yason from "yason";

function simplify(pathname, stream = process.stdout) {
  const boardData = yason.parse(pathname);
  const boardName = boardData.name;
  const labels = boardData.labelNames || {};
  const lists = {};
  const checklists = {};
  const cards = boardData.cards || [];

  for (const list of boardData.lists) {
    lists[list.id] = list.name;
  }

  for (const checklist of boardData.checklists) {
    checklists[checklist.id] = {
      name: checklist.name,
      items: checklist.checkItems.map((item) => ({
        name: item.name,
        state: item.state === "complete",
      })),
    };
  }

  const formattedCards = cards.map((card) => {
    const cardLabels = card.labels.map((label) => label.name);
    const cardChecklists = card.idChecklists.map((id) => checklists[id]);
    return {
      title: card.name,
      desc: card.desc,
      labels: cardLabels,
      checklists: cardChecklists,
    };
  });

  const data = {
    type: "board",
    name: boardName,
    labels,
    lists: Object.entries(lists).map(([id, name]) => ({
      type: "list",
      name,
      cards: formattedCards.filter((c) => c.idList === id),
    })),
  };

  yason.stringify(data, stream, { indent: true });
}

export default simplify;
