try {
    let a = 13;
    console.log(a.name.age);
}
catch (err) {
    console.log(err.message);
    console.log(err.name);
    console.log(err.stack);

    //you can make your custom error too
    throw new Error ("something went wrong from our side");
}