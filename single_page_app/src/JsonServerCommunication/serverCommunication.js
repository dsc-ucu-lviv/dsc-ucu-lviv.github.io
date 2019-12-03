export const
    getAllMaterials = async (id) => {
        if (id === null) {return null;}
        else {
            let url = `http://localhost:3001/materials`;

            const responseObject = await fetch(url);
            if (responseObject.status === 200){
                const responseDaysObject = await responseObject.json();
                return {
                    materials: responseDaysObject
                };
            } else {
                throw new Error(responseObject.status.toString());
            }
        }
    };

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
// AIzaSyBiQbwIhQsWH5tcRqHh192AapVPTzmXfxM
// 637558198392
// 1:637558198392:web:be17d353bb7118761d5d8d
// G-GDK2MJ4EWK
// "img_url": "https://github.com/dsc-ucu-lviv/w_flask/blob/master/flask-insta_poster.jpg?raw=true",