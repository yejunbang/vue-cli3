interface Person {
  firstname: string;
  lastname: string;
}

function geeter3(person: Person) {
  return "hello, " + person.firstname + " " + person.lastname;
}

const user: Person = { firstname: "aa", lastname: "bb" };
console.log(geeter3(user));

// 泛型
interface Result<T> {
  data: T;
}

function getData<T>(): Promise<Result<T>> {
  const data: any = [{ firstname: "aa", lastname: "bb" }];
  // return { data };
  return Promise.resolve<Result<T>>({ data });
}

getData<Person[]>().then(result=>{
  console.log(result.data);
});
