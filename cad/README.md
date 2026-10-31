# CAD Library

Drop robot CAD files in the matching folder. The CAD page links to these folders on GitHub.

## Folders

| Folder | What goes here |
| --- | --- |
| `full-robot/` | Complete robot assembly, STEP exports, and reference files |
| `drivetrain/` | Chassis plates, gearboxes, wheel mounts, and frame parts |
| `manipulator/` | Intake, transfer, and scoring mechanism parts |
| `electronics/` | Control hub, battery, wiring, and mounting layouts |
| `prototypes/` | Early concepts, test pieces, and iteration files |
| `custom-parts/` | Printable brackets, plates, spacers, and mounts |

## Naming

Use this pattern so files stay sortable:

```text
15371_<season>_<subsystem>_v<version>.<ext>
```

Examples:

```text
15371_2026_drivetrain_v3.step
15371_2026_intake_v1.step
15371_2026_bracket_v2.stl
15371_2026_full-robot_v4.step
```

## Tips

- Export `.step` for every part that someone might need to edit.
- Export `.stl` for parts that will be 3D printed.
- Add an Onshape document link in a small `README.md` inside the folder if the native model is shared.
- Keep the newest version in the folder; move old versions to a `versions/` subfolder if needed.
- Update the links on `cad.html` if a file is added outside these folders.
