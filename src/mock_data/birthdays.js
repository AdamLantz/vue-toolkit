export const details = {
    1: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        dateOfBirth: new Date(1995, 2, 22),
        photoURL: "http://placekitten.com/200/300",
        likes: ["Birthday cards", "Going out for dinner", "Going on trips"],
        dislikes: ["Lots of attention"],
    },
    2: {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        dateOfBirth: new Date(1996, 6, 2),
        photoURL: "http://placekitten.com/200/200",
        likes: [],
        dislikes: [],
    },
    3: {
        id: 3,
        firstName: "Franken",
        lastName: "Stein",
        dateOfBirth: new Date(1989, 11, 14),
        photoURL: "http://placekitten.com/200/150",
        likes: [],
        dislikes: [],
    }
}

const people = Object.keys(details).map(k => {
    const { id, firstName, lastName, dateOfBirth, photoURL } = details[k];
    return { id, firstName, lastName, dateOfBirth, photoURL };
});

export default { people, details };