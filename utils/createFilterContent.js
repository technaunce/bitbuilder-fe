export default function createUrlParamsForFilter(filterData) {
  let categorizedByTitle = {};
  let queryString = "";

  // Organize the filter data array
  filterData.forEach((data) => {
    if (Object.keys(categorizedByTitle).includes(data.title)) {
      categorizedByTitle[data.title] = [
        ...categorizedByTitle[data.title],
        data.label,
      ];
    } else {
      categorizedByTitle[data.title] = [data.label];
    }
  });

  // Convert the filter data to query text...
  if (filterData.length) {
    // ...only if there is data to filter.
    let subStrings = [];
    Object.keys(categorizedByTitle).forEach((title) => {
      if (title !== "auctionStatus") {
        const listString = categorizedByTitle[title].join(",");
        subStrings.push(`${title}=${listString}`);
      }
    });
    queryString = subStrings.join("&");
  }

  return queryString;
}
