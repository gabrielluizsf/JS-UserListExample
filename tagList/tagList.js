const tags = new Set([]);

 tags.add('programmer');
 tags.add('guitarist');
 tags.add('Bassist');
 tags.add('DEV');
 tags.add('Creator');
 tags.add('programmer');//if tag already exist, tag not add from array

const result = Array.from(tags);

    console.log(result);
