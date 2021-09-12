import { Hi } from "@src/components/Hi.js"
import { Bye } from "@src/components/Bye.js"

export const app = () => {
    const $root = document.querySelector('.root');
    const $frag = new DocumentFragment();

    const $main = document.createElement('main');
    $main.append(Hi(), Bye());

    $frag.append($main);
    $root.append($frag);
};
