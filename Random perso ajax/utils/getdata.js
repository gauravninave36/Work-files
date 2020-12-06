const url = "https://randomuser.me/api/";
const getuser = async () => {
    const response = await fetch(url);
    const info = await response.json();
    // const { phone, name: { first: firstName }, dob: { age: age }, location: { street: { name: street } }, login: { password: password } } = info.results[0];
    //name email age street phone password
    // const information = [firstName, phone, age, street, password];
    // console.log(information);
    //destructure
    const person = info.results[0];
    console.log(person);
    const { phone, email } = person;
    const { large: image } = person.picture;
    const { age } = person.dob;
    const { password } = person.login;
    const { first, last } = person.name;
    const { street: { name, number } } = person.location;
    return { phone, email, image, password, age, street: `${name}${number}`, name: `${first}${last}` }
}
export default getuser;