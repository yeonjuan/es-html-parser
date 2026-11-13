import { parse } from "../../parser";
import { NodeTypes } from "../../constants";

const getElement = (html: string, name: string) => {
  const { ast } = parse(html);
  const find = (nodes: any[]): any => {
    for (const node of nodes) {
      if (node.type === NodeTypes.Tag && node.name === name) {
        return node;
      }
      if (node.children) {
        const found = find(node.children);
        if (found) return found;
      }
    }
  };
  return find(ast.children);
};

describe("raw text elements", () => {
  test.each(["textarea", "title", "xmp", "iframe", "noembed", "noframes"])(
    "<%s> content is text until the matching end tag",
    (name) => {
      const html = `<div><${name}><ul><li>item</li></ul><b>x</${name}><p>after</p></div>`;
      const element = getElement(html, name);

      expect(element.children).toHaveLength(1);
      expect(element.children[0].type).toBe(NodeTypes.Text);
      expect(element.children[0].value).toBe("<ul><li>item</li></ul><b>x");
      expect(element.close.value).toBe(`</${name}>`);

      const div = getElement(html, "div");
      expect(div.children.map((node: any) => node.name)).toEqual([name, "p"]);
    }
  );

  test("end tag is matched case-insensitively", () => {
    const element = getElement(
      "<TEXTAREA><b>x</b></TextArea><p></p>",
      "textarea"
    );
    expect(element.children).toHaveLength(1);
    expect(element.children[0].value).toBe("<b>x</b>");
    expect(element.close.value).toBe("</TextArea>");
  });

  test("other end tags and comments stay text", () => {
    const element = getElement(
      "<title>a </div> <!-- c --> </titles> b</title>",
      "title"
    );
    expect(element.children).toHaveLength(1);
    expect(element.children[0].value).toBe("a </div> <!-- c --> </titles> b");
  });

  test("empty element", () => {
    const element = getElement("<textarea></textarea>", "textarea");
    expect(element.children).toHaveLength(0);
    expect(element.close.value).toBe("</textarea>");
  });

  test("unclosed element keeps the rest as text", () => {
    const element = getElement("<textarea><b>x", "textarea");
    expect(element.children).toHaveLength(1);
    expect(element.children[0].type).toBe(NodeTypes.Text);
    expect(element.children[0].value).toBe("<b>x");
  });

  test("self-closing tag does not swallow the rest", () => {
    const { ast } = parse("<textarea/><p>a</p>");
    expect(ast.children.map((node: any) => node.name)).toEqual([
      "textarea",
      "p",
    ]);
  });

  test("text keeps its location", () => {
    const element = getElement("<title>\n<b>x</title>", "title");
    expect(element.children[0].range).toEqual([7, 12]);
    expect(element.children[0].loc).toEqual({
      start: { line: 1, column: 7 },
      end: { line: 2, column: 4 },
    });
  });
});
