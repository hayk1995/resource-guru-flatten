export const flattenArray = (arr: any[]): any[] => {
    const flat: any[] = [];
    const flattenNestedArr = (nestedArr: any[]) => {
        nestedArr.forEach(el => {
            if (Array.isArray(el)) {
                flattenNestedArr(el as any[]);
            } else {
                flat.push(el);
            }
        });
    }
    flattenNestedArr(arr);
    return flat;
}

export default flattenArray;