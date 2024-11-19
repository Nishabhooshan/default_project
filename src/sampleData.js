const sampleData = {
    id: "5ad1cc79-83cb-4aa4-8a2b-65e6baa8a991",
    project_name: "default_project",
    output_name: "default_output",
    created: "2023-01-02T06:26:04.532316+00:00",
    modified: "2023-07-27T07:42:49.812940+00:00",
    last_run: "2023-07-27T07:42:49.812940+00:00",
    table_headers: [
      { name: "Row", type: "serial" },
      { name: "Territory", type: "object" },
      { name: "Date", type: "object" },
      { name: "Units", type: "int" },
      { name: "Average_Unit_Price", type: "float" },
      { name: "TV_Total", type: "float" },
      { name: "Video_on_Demand", type: "float" },
      { name: "Proof_of_Concept_Spend", type: "float" },
      { name: "Print_Spend", type: "float" },
      { name: "Online_Display", type: "int" },
      { name: "FSI_Coupon", type: "float" },
      { name: "Feature", type: "float" },
      { name: "Display", type: "float" },
      { name: "Price_Reduction", type: "float" },
      { name: "Feat_and_Disp", type: "float" },
      { name: "Pct_Discount", type: "float" },
      { name: "Competitor_Distribution_1", type: "int" },
      { name: "Competitor_Distribution_2", type: "int" },
      { name: "Competition_Units", type: "int" }
    ],
    table_data: [
      [
        "1",
        "Brick 001",
        "2021-01-01",
        "298",
        "5.7819",
        "0.0",
        "0.0",
        "0.0",
        "0.0",
        "0",
        "0.0",
        "0.0",
        "0.0827",
        "0.0",
        "0.0",
        "0.0016",
        "38",
        "14",
        "4675"
      ],
      [
        "2",
        "Brick 001",
        "2021-02-01",
        "327",
        "5.8471",
        "94.1656",
        "0.0",
        "0.0",
        "0.0",
        "0",
        "0.0",
        "0.0",
        "0.0289",
        "0.0",
        "0.0",
        "0.0",
        "37",
        "19",
        "4888"
      ],
      [
        "3",
        "Brick 001",
        "2021-03-01",
        "296",
        "5.8209",
        "122.7687",
        "0.0",
        "0.0",
        "0.0",
        "0",
        "0.0",
        "0.0",
        "0.1469",
        "0.018",
        "0.0",
        "0.0107",
        "41",
        "17",
        "4444"
      ],
      [
        "4",
        "Brick 001",
        "2021-04-01",
        "288",
        "5.9479",
        "129.9336",
        "0.0",
        "0.0",
        "0.0",
        "0",
        "0.0",
        "0.0",
        "0.0842",
        "0.0",
        "0.0",
        "0.0048",
        "36",
        "21",
        "4190"
      ],
      [
        "5",
        "Brick 001",
        "2021-04-01",
        "288",
        "5.9479",
        "129.9336",
        "0.0",
        "0.0",
        "0.0",
        "0",
        "0.0",
        "0.0",
        "0.0842",
        "0.0",
        "0.0",
        "0.0048",
        "36",
        "21",
        "4190"
      ]
    ],
    workflow_steps: [
      {
        id: "b15f6a85-4228-4f30-9418-c412e1b86757",
        name: "select_dataset",
        ord_exec: 0,
        params_extra: {
          id: "1b41df23-35d6-45a9-95ef-0427faa66fdf",
          name: "Brick Data",
          note: null
        },
        status: "VALID",
        name_title: "DATASET SELECTION",
        note: null
      },
      {
        id: "51fc2e2e-4525-49f5-95c4-d8dd796fa9a8",
        name: "new",
        ord_exec: 1,
        params_extra: {
          pipeline: -1,
          expression: "LEFT ([Date], 4)",
          column_name: "Date_YY",
          note: null
        },
        status: "VALID",
        name_title: "NEW",
        note: null
      },
      {
        id: "d552244c-1a81-4125-abf8-864cf7ff4bf2",
        name: "aggregate",
        ord_exec: 2,
        params_extra: {
          fork: true,
          agg_type: ["mean"],
          dim_cols: ["Territory", "Date_YY"],
          meas_col: [["Units", "Average_Unit_Price"]],
          pipeline: -1,
          fork_name: "FRK1",
          note: null
        },
        status: "VALID",
        name_title: "AGGREGATE",
        note: null
      },
      {
        id: "c2ba7bdd-209e-4a85-80c2-57f19a8bbbb3",
        name: "clean",
        ord_exec: 3,
        params_extra: {
          columns: ["Territory", "Date", "Date_YY"],
          pipeline: -1,
          clean_type: "na",
          note: null
        },
        status: "VALID",
        name_title: "CLEAN",
        note: null
      },
      {
        id: "f7ceb81c-5219-4a65-9d7d-2ebf0ac2481d",
        name: "de_dupe",
        ord_exec: 4,
        params_extra: {
          columns: ["Territory"],
          pipeline: -1,
          note: null
        },
        status: "VALID",
        name_title: "DEDUPE",
        note: null
      },
      {
        id: "6142c039-43b6-4c91-a4af-9e08d7ecc68f",
        name: "join",
        ord_exec: 5,
        params_extra: {
          type: "inner",
          extras: {
            project: "916f16d6-534a-408b-a25e-2dbc29220a1e",
            internal: true,
            dataset_name: "ETL N_D2_FRK1",
            project_name: "ETL New Demo 2"
          },
          dataset2: "10bfa826-6a03-477f-b4de-da0e4cb95d07",
          pipeline: -1,
          left_columns: ["Territory"],
          right_columns: ["Territory"],
          dataset2_name: "ETL N_D2_FRK1",
          note: null
        },
        status: "VALID",
        name_title: "JOIN",
        note: null
      }
    ],
    row_count: "500"
  };
  
  export default sampleData;
  