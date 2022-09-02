const functions=require("./function");

test("Adds 2 + 2 equals to 4",()=>{
    expect(functions.add(2,2)).toBe(4);
});


 test("To be Null",()=>{
    expect(functions.isNull()).toBe(null);
  });



test("To be Law Uche",()=>{
     expect(functions.createUser()).toEqual({firstName:"Law",lastName:"Uche"});
   });

test("To Contain Gg",()=>{
       expect(functions.users).toContain("groovy");
});

