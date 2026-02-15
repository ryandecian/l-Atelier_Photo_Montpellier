/* Type utilisée dans les composants data */
type TarifCard_element_Type = {
    title: string;
    price: string;
    description: {
        item: string;
    }[];
}[]

export type { TarifCard_element_Type };


/* Type utilisée dans le composant élément TarifCard.element.tsx */
type TarifCardProps = {
    items: TarifCard_element_Type;
};

export type { TarifCardProps };
