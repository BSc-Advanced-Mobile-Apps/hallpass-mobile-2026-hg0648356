import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import Task from '@/components/ui/Task';

export interface ITask {
  title: string;
  category: string;
  isChecked: boolean;
}

export default function HomeScreen() {
  const task1: ITask = {
    title: 'Assignment 1',
    category: 'Digital Technologies',
    isChecked: false,
  };
  const task2: ITask = {
    title: 'Weekly Shopping',
    category: 'Chores',
    isChecked: false,
  };

  return (
    <View className="bg-background flex flex-1 py-32">
      <Task task={task1} />
      <Task task={task2} />
    </View>
  );
}
