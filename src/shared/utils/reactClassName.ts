export type Modifier = { [key: string]: (boolean | (() => boolean)) } | string[] | string;

const arrayToObject = (array: string[]) => {
    return array.reduce((acc, value) => {
        if (value) { acc[value] = true; }
        return acc;
    }, {} as any);
};

export const generateClassName = (elementClass: string, modifiers: Modifier = {}, noElementClass: boolean = false) => {
    if (!modifiers) { return elementClass; }
    const modifiersObject = typeof modifiers === 'string' ? arrayToObject(modifiers.split(' ')) :
        ((modifiers instanceof Array) ? arrayToObject(modifiers) : modifiers);
    const modifiersClasses = Object.keys(modifiersObject).reduce((acc: any, key) => {
        const modifier = modifiersObject[key];
        const value = (typeof modifier === 'function') ? modifier() : modifier;
        if (value) { acc.push(`${elementClass}--${key}`); }
        return acc;
    }, []);
    return (noElementClass ? modifiersClasses : [elementClass, ...modifiersClasses]).join(' ');
};
