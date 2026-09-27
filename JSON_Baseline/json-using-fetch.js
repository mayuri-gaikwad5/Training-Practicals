// Sending JSON using fetch()

const personData = {
    name: "John",
    age: 30
};

async function sendPerson() {

    try {
        const response = await fetch("/api/person", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(personData)
        });

        console.log(response);

    }
    catch (error) {
        console.log("Request failed:", error.message);
    }
}

// sendPerson();