import { getGifs } from "../../src/helpers/getGifs";

describe("Tests in getGifs helper", () => {

    test("Debe retornar arreglo de gif", async () => {
        const gifs = await getGifs("One Punch");

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    })

});