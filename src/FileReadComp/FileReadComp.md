# FileReadComp

**FileReadComp** is a simple Vue.js component (>=3.2) for reading file names/content.  The component looks like a button that brings up a file dialog for selecting a file.  After selection the component emits two events for the selected file name and file content.  See the *src/FileReadComp* folder for the Vue source (FileReadComp.vue).

## Props

## 

| prop         | description                                    | accepted value  | default |
| ------------ | ---------------------------------------------- | --------------- | ------- |
| readLabel    | a label for the **FileReadComp**               | string          | null    |
| readFile     | if the component is to read the file's content | boolean         | false   |
| cssVariables | defines some css variables for easy styling    | see table below | null    |

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **FileReadComp**. The following table shows the css variable names along with their default values:



| variable name                         | default value                                                |
| ------------------------------------- | ------------------------------------------------------------ |
| file_read_comp_font_family            | 'Verdana, serif'                                             |
| file_read_comp_label_font_size        | '1rem'                                                       |
| file_read_comp_label_font_weight      | 'normal'                                                     |
| file_read_comp_label_color            | 'black'                                                      |
| file_read_comp_label_box_shadow       | '4px 4px 6px 1px rgba(0,0,0,0.4) , 2px 2px 2px 0 rgba(0,0,0,0.2)' |
| file_read_comp_label_background       | 'linear-gradient(to bottom, #969696 0, #969696 13%, #5f5f5f 33%, #1e1e1e 64%, #1e1e1e 100%)' |
| file_read_comp_label_border_color     | 'black'                                                      |
| file_read_comp_label_hover_background | 'linear-gradient(to bottom, #969696 0, #1e1e1e 100%)'        |

## Events

**FileReadComp**  emits two events that notifies the parent component the selected file name and optionally the file's content.



| event   | description          | parameters      | emits                       |
| ------- | -------------------- | --------------- | --------------------------- |
| @change | returns file name    | text: file name | fileReadCompFilenameChanged |
| @change | returns file content | file content    | fileReadCompContentChanged  |