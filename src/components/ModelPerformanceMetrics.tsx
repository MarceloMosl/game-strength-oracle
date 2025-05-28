
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const stabilityData = [
  { name: 'Low Variance', value: 85, color: '#10B981' },
  { name: 'Medium Variance', value: 12, color: '#F59E0B' },
  { name: 'High Variance', value: 3, color: '#EF4444' },
];

const ModelPerformanceMetrics = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={stabilityData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {stabilityData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937', 
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#E5E7EB'
            }}
            formatter={(value) => [`${value}%`, 'Prediction Stability']}
          />
          <Legend 
            wrapperStyle={{ color: '#E5E7EB', fontSize: '12px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ModelPerformanceMetrics;
