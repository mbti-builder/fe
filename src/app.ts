import { Hi } from "@src/components/Hi"
import { Bye } from "@src/components/Bye"

export const app = () => {
    const $root = document.querySelector('.root') as HTMLDivElement;
    const $frag = new DocumentFragment();

    const $main = document.createElement('main');
    $main.append(Hi(), Bye());

    $frag.append($main);
    $root.append($frag);
};
