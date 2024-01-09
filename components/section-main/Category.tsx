import Image from "next/image";

export default function Category() {
  return (
    <div className="flex gap-4">
      <ul className="main-category w-[250px] mr-6">
        <li>
          <button className="active" type="button">
            Automobiles
          </button>
        </li>
        <li>
          <button type="button">Clothes and wear</button>
        </li>
        <li>
          <button type="button">Home interiors</button>
        </li>
        <li>
          <button type="button">Computer and tech</button>
        </li>
        <li>
          <button type="button">Tools, equipments</button>
        </li>
        <li>
          <button type="button">Sports and outdoor</button>
        </li>
        <li>
          <button type="button">Animal and pets</button>
        </li>
        <li>
          <button type="button">Machinery tools</button>
        </li>
        <li>
          <button type="button">More category</button>
        </li>
      </ul>
      <Image
        src="/images/banner-board.png"
        width="664"
        height="373"
        alt="banner-board"
      />
    </div>
  );
}
