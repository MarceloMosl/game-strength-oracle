
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Exploration Diff', importance: 23.4 },
  { name: 'Complexity Ratio', importance: 18.7 },
  { name: 'Outcome Uniformity', importance: 15.2 },
  { name: 'Budget Ratio', importance: 12.8 },
  { name: 'Time Efficiency', importance: 11.3 },
  { name: 'Search Depth', importance: 8.9 },
  { name: 'Branch Factor', importance: 6.2 },
  { name: 'Game Balance', importance: 3.5 },
];

const colors = [
  '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', 
  '#EF4444', '#06B6D4', '#84CC16', '#F97316'
];

const FeatureImportanceChart = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
          <XAxis 
            dataKey="name" 
            angle={-45}
            textAnchor="end"
            height={80}
            tick={{ fontSize: 10, fill: '#E5E7EB' }}
          />
          <YAxis 
            tick={{ fontSize: 10, fill: '#E5E7EB' }}
            label={{ value: 'Importance (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#E5E7EB' } }}
          />
          <Bar dataKey="importance" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FeatureImportanceChart;
