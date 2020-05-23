export const getDisqusConfig = (id: string, title: string) => ({
  url: "http://localhost:3000/blog/" + id,
  identifier: id,
  title: title,
});

export const getDisqusShortname = "sungjin-log";