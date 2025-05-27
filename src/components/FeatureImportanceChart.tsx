
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'LudRules', importance: 32.4 },
  { name: 'agent2_selection', importance: 18.7 },
  { name: 'AdvantageP2', importance: 15.2 },
  { name: 'Drawishness', importance: 12.8 },
  { name: 'GameTreeComplexity', importance: 11.3 },
  { name: 'DecisionFactorMedian', importance: 8.9 },
  { name: 'PlayoutsPerSecond', importance: 6.2 },
  { name: 'Completion', importance: 4.5 },
  { name: 'Balance', importance: 3.8 },
  { name: 'OverallComplexity', importance: 2.9 },
];

const colors = [
  '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', 
  '#EF4444', '#06B6D4', '#84CC16', '#F97316',
  '#EC4899', '#6366F1'
];

const FeatureImportanceChart = () => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
          <XAxis 
            dataKey="name" 
            angle={-45}
            textAnchor="end"
            height={120}
            tick={{ fontSize: 11, fill: '#E5E7EB' }}
          />
          <YAxis 
            tick={{ fontSize: 11, fill: '#E5E7EB' }}
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
