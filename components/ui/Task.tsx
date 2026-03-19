import { ITask } from '@/app/index';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

interface TaskProps {
  task: ITask;
}

export default function Task({ task }: TaskProps) {
  const [check, setCheck] = useState(false);
  return (
    <View className="flex flex-row">
      <View className="flex items-center justify-center p-4">
        <Checkbox
          checked={check}
          onCheckedChange={setCheck}
          className="border-foreground-transparent h-4 w-4 rounded-xs border-2"
        />
      </View>
      <View className="border-b-foreground-transparent w-100 flex-1 border py-2">
        <Text className="text-foreground">{task.title}</Text>
        <Text className="text-foreground-transparent">{task.category}</Text>
      </View>
    </View>
  );
}
