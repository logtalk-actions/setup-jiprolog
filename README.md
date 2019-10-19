# setup-jiprolog

This actions sets up a JIProlog environment for use in workflows.

# Usage

See [action.yml](action.yml).

# Example

```yml
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: logtalk-actions/setup-jiprolog@master
        with:
          jiprolog-version: 4.1.6.1
      - uses: logtalk-actions/setup-logtalk@master
        with:
          logtalk-version: 3.31.0
```

# License

The scripts and documentation in this project are released under the [Apache License 2.0](LICENSE).

# Current Status

This action is in active development.
