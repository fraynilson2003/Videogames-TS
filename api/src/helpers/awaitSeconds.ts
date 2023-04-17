export async function awaitSeconds(time: number): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, Number(time * 1000));
    });
  }