import React from 'react';
import {useController, useFormContext} from 'react-hook-form';
import {StyleSheet, View, TextInput, Text} from 'react-native';

type FormTextFieldProps = {
  name: string;
  label: string;
  secureTextEntry?: boolean;
};

export const FormTextField = (props: FormTextFieldProps) => {
  const {control} = useFormContext();
  const {field} = useController({
    control,
    name: props.name,
  });

  const handleChange = (text: string) => {
    const trimmedText = text.trim();
    field.onChange(trimmedText);
  };

  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <TextInput
        onChangeText={handleChange}
        onBlur={field.onBlur}
        value={field?.value}
        secureTextEntry={props.secureTextEntry}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: '100%',
    padding: 4,
  },
  textInput: {
    height: 24,
  },
});
