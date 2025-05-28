
import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';

const cvData = [
  { fold: 'Fold 1', rmse: 0.1234 },
  { fold: 'Fold 2', rmse: 0.1218 },
  { fold: 'Fold 3', rmse: 0.1195 },
  { fold: 'Fold 4', rmse: 0.1176 },
  { fold: 'Fold 5', rmse: 0.1162 },
];

const CrossValidationChart = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={cvData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="fold" 
            tick={{ fontSize: 11, fill: '#E5E7EB' }}
          />
          <YAxis 
            tick={{ fontSize: 11, fill: '#E5E7EB' }}
            domain={['dataMin - 0.002', 'dataMax + 0.002']}
            label={{ value: 'RMSE', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#E5E7EB' } }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937', 
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#E5E7EB'
            }}
            formatter={(value) => [value, 'RMSE']}
          />
          <Line 
            type="monotone" 
            dataKey="rmse" 
            stroke="#10B981" 
            strokeWidth={3}
            dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
            activeDot={{ r: 8, stroke: '#10B981', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CrossValidationChart;
