import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  test("Debe de retornar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { images, isLoading } = result.current;
    expect(images).toEqual([]);
    expect(isLoading).toBe(true);
  });

  test("Debe de retornar un arreglo de imagenes y isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0),
      {timeout: 3000}
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBe(false);
  });
});
