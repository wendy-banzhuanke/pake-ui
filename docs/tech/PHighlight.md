---
title: PHighlight 代码高亮
---

基于Highlight封装的代码高亮

``` javascript
let a = `CREATE TABLE "topic" (
    "id" serial NOT NULL PRIMARY KEY,
    "forum_id" integer NOT NULL,
    "subject" varchar(255) NOT NULL
  );
  ALTER TABLE "topic"
  ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
  REFERENCES "forum" ("id");

    -- Initials
    insert into "topic" ("forum_id", "subject")
    values (2, 'D''artagnian');`
```
<p-highlight-index code="select * from user where 1=1" language="sql"/>