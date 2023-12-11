"use client";
import { Card } from "@radix-ui/themes";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}
const IssueChart = ({ open, inProgress, closed }: Props) => {
  const data = [
    { label: "Open", value: open, fill: "#c40006d3" },
    { label: "In-Progress", value: inProgress, fill: "#1f0099af" },
    { label: "Closed", value: closed, fill: "#00713fde" },
  ];
  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barSize={60}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
