import { mdiGithub, mdiTwitter } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";

export default function Header() {
  return (
    <figure className="flex flex-col md:flex-row bg-gray-100 p-2 md:p-0 rounded overflow-hidden shadow-md dark:shadow-none dark:ring ring-indigo-500">
      <div className="flex justify-center">
        <Image
          className="hover:grayscale-0 dark:grayscale rounded md:rounded-none"
          src="/gera.jpg"
          alt="Gerardo Sabetta's picture"
          width="256"
          height="256"
        />
      </div>
      <div className="pt-2 p-8 text-center md:text-left flex flex-col gap-3">
        <figcaption className="font-medium">
          <div className="text-cyan-600">Gerardo Sabetta</div>
          <div className="text-gray-500">Frontend developer</div>
        </figcaption>
        <div className="flex flex-col gap-3 justify-between h-100 flex-grow">
          <p className="text-lg font-semibold">
            I'm passionate about modern web development and I love working with
            the latest, trendiest technologies
          </p>
          <div className="flex justify-center md:justify-end">
            <div className="grid grid-flow-col gap-2">
              <a
                href="https://github.com/gerardosabetta"
                target="_blank"
                rel="noopener"
              >
                <Icon path={mdiGithub} size={1} color="gray" />
              </a>
              <a
                href="https://twitter.com/gerardosabetta"
                target="_blank"
                rel="noopener"
              >
                <Icon path={mdiTwitter} size={1} color="gray" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
