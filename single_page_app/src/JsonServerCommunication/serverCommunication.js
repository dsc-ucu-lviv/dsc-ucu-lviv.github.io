

export const
    getMaterialsByID = async (id) => {
        if (id === null) {return null;}
        else {
            let url = `http://localhost:3001/materials?id=${id}`;


            const responseObject = await fetch(url);
            if (responseObject.status === 200){
                const responseDaysObject = await responseObject.json();
                return {
                    id: id,
                    materials: responseDaysObject[0]
                };

            } else {
                throw new Error(responseObject.status.toString());
            }
        }
    };


// npm install -g json-server
// json-server --watch src/db.json --port 3001