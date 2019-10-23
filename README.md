# setup-jiprolog

This actions sets up a JIProlog environment for use in workflows.

![](https://github.com/logtalk-actions/setup-jiprolog/workflows/Test/badge.svg)

# Usage

See [action.yml](action.yml).

# Example

```yml
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Install JIProlog backend
        uses: logtalk-actions/setup-jiprolog@master
        with:
          jiprolog-version: 4.1.6.1
      - name: Install Logtalk
        uses: logtalk-actions/setup-logtalk@master
        with:
          logtalk-version: latest
      - name: Checkout Logtalk application to be tested
        uses: actions/checkout@v1
      - name: Run all tests in the application directory
        run: logtalk_tester -p ji
```

# License

This project is released under the [Apache License 2.0](LICENSE).

# Current Status

This action is in active development. This action does not support Windows at this time.
