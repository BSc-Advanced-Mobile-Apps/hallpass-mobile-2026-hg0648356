import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';

export default function HomeScreen() {
  return (
    <View className="bg-background flex flex-1 py-32">
      <Text className="text-center text-white">Hello, world!</Text>
      <View className="flex flex-row">
        <View className="flex items-center justify-center p-4">
          <Checkbox
            checked={false}
            className="border-foreground-transparent h-4 w-4 rounded-xs border-2"
          />
        </View>
        <View className="border-b-foreground-transparent w-100 border py-2">
          <Text className="text-foreground">Subject Assignment</Text>
          <Text className="text-foreground-transparent">Due: Oct 20</Text>
        </View>
      </View>
    </View>
  );
}
