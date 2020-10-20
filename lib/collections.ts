import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

function Collection(folder) {
  const directory = path.join(process.cwd(), folder);
  const fileNames = fs.readdirSync(directory);

  async function get(id) {
    const fullPath = path.join(directory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  }

  function getAll() {
    return fileNames.map((fileName) => {
      const fullPath = path.join(directory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id: fileName.replace(/\.md$/, ""),
        ...matterResult.data,
      };
    });
  }

  function getIds() {
    return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  }

  return Object.freeze({
    get,
    getAll,
    getIds,
  });
}

export const cheatsheets = Collection("cheatsheets");
