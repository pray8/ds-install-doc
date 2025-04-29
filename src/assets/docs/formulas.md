## Introduction

Formulas in [datanimbus.io](https://datanimbus.io) are reusable functions 
that help eliminate redundant operations in your DataPipes. If you frequently 
perform the same transformations—such as generating a file name in a specific 
format or formatting a particular field—you can create a Formula to automate 
and reuse these operations wherever needed.

# Creating a Formula

To create a new Formula, follow these steps:

1. **Navigate to the Formulas Section**
   - Click on **Formulas** in the left-side menu.
   - Click the **+ New** button to create a new Formula.
   - <img src="/app/assets/docs/images/formula_0.png" alt="Formula Creation Screenshot" />

2. **Define the Formula**
   - Enter a **name** for the Formula. For this example, we'll create a function to generate a file name in the format:
        ```csv
        REPORT_DATE_EPOCH.csv
        ```
    where:

        ▪ DATE → DDMMYYYY (current date in day-month-year format)

        ▪ EPOCH → Unix timestamp (in seconds or milliseconds)

    - Select the applicable type from the drop-down (String, Number, Boolean, Date, Object, Array).

    - Select the return type, which must match the expected output (String, Number, Boolean, Date, Object, Array).

    We'll name the Formula generateFileName, set the applicable type to String, and return type to String.

    <img src="/app/assets/docs/images/formula_1.png" alt="Formula Creation Screenshot" />

3. **Create the Formula**

    - Click Create to proceed.

4. **Define Parameters**

    - On the next screen, add the required parameters for the function and specify their types.
- <img src="/app/assets/docs/images/formula_2.png" alt="Formula Creation Screenshot" />

5. **Write the Code**

    - Inside the code block, write the function logic. Below is an example implementation:
        ```javascript
        const now = new Date();
        const dateStr = now.toLocaleDateString('en-GB').replace(/\//g, ''); // Format as DDMMYYYY
        const epochTime = Math.floor(now.getTime() / 1000); // Get epoch time in seconds
        const fileName = `REPORT_${dateStr}_${epochTime}.csv`;
        return fileName
        ```

    - Click Save to finalize your Formula.

        <img src="/app/assets/docs/images/formula_3.png" alt="Formula Creation Screenshot" />

# Using a Formula in DataPipes

Once your Formula is created, you can use it inside DataPipes. To use a Formula:
    ▪ Open a Mapper where you need the function.

    ▪ Call the Formula directly by referencing its name.

For example, inside a DataPipe Mapper, you can call:

    ```javascript
    generateFileName();
    ```
This will return a file name in the desired format.

<img src="/app/assets/docs/images/formula_4.png" alt="Formula Creation Screenshot" />

# Conclusion

Formulas in datanimbus.io  provide a powerful way to streamline repetitive tasks in your DataPipes. By defining reusable functions, you can standardize processes and improve efficiency. Start creating your own Formulas today to simplify data transformations!