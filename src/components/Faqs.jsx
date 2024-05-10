import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function Faqs() {
    // State to manage the open/close state of accordion items
    const [openItem, setOpenItem] = useState(null);

    // Function to toggle the open/close state of an accordion item
    const handleToggleItem = (value) => {
        setOpenItem(openItem === value ? null : value);
    };

    return (
        <div className="md:w-[70%] mx-auto w-full">
            <h2 className="text-white font-semibold text-lg p-6">FAQs</h2>
            <Accordion
                type="single"
                collapsible
                className="w-full text-white p-6 flex flex-col gap-6"
                openItem={openItem}
                onOpenChange={setOpenItem} // Function to update the openItem state
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger isOpen={openItem === 'item-1'} onClick={() => handleToggleItem('item-1')}>
                        How to get started?
                    </AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate felis vel dui aliquet dictum. Vivamus id viverra purus, ut semper urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer at scelerisque tortor. Maecenas vestibulum diam nisi, eget facilisis felis laoreet vel.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger isOpen={openItem === 'item-2'} onClick={() => handleToggleItem('item-2')}>
                        How to get started?
                    </AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate felis vel dui aliquet dictum. Vivamus id viverra purus, ut semper urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer at scelerisque tortor. Maecenas vestibulum diam nisi, eget facilisis felis laoreet vel.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger isOpen={openItem === 'item-3'} onClick={() => handleToggleItem('item-3')}>
                        How to get started?
                    </AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate felis vel dui aliquet dictum. Vivamus id viverra purus, ut semper urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer at scelerisque tortor. Maecenas vestibulum diam nisi, eget facilisis felis laoreet vel.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
