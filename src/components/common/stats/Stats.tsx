interface IStats {
  stat_name: string[];
  stat_value: number[];
}

const Stats = ({ stat_name, stat_value }: IStats) => {
  const statName: Record<string, string> = {
    hp: "체력",
    attack: "공격력",
    defense: "방어력",
    "special-attack": "특수공격력",
    "special-defense": "특수방어력",
    speed: "스피드",
  };

  const stat = stat_name.map((item, idx: number) => (
    <tr
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      key={`${item}_${idx}`}
    >
      <th
        scope="row"
        className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r"
      >
        {statName[item]}
      </th>
      <td className="px-3 py-2">{stat_value[idx]}</td>
    </tr>
  ));

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 border-r">
              스탯
            </th>
            <th scope="col" className="px-6 py-3">
              수치
            </th>
          </tr>
        </thead>
        <tbody>{stat}</tbody>
      </table>
    </div>
  );
};

export default Stats;
