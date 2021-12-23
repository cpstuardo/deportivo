import { Radar } from "@nivo/radar";
import "../App.css";

const MyResponsiveRadar = ({ data, keys, indexBy }) => (
  <div className="containerRadar">
    <Radar
      data={data}
      keys={keys}
      indexBy={indexBy}
      maxValue={100}
      width={700}
      height={550}
      valueFormat=">-.2f"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      borderColor={{ from: "color" }}
      gridLabelOffset={15}
      gridLevels={10}
      dotSize={5}
      dotColor={{ from: "color", modifiers: [] }}
      dotBorderWidth={2}
      colors={{ scheme: "category10" }}
      fillOpacity={0.6}
      borderWidth={0}
      blendMode="multiply"
      motionConfig="wobbly"
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -20,
          translateY: -60,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  </div>
);

export default MyResponsiveRadar;
