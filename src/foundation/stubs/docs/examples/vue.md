### Examples Vue

> `Example Of Package Being Used Within Vue`

```bash

<template>
    <div>
        <!-- Example Template -->
    </div>
</template>

<script>
    import Vue from 'vue'
    import {default_variable} from '{repo}'

    export default {
        name: 'vue-example',

        props: {
            company: {
                type: String,
                required: false,
                default: () => 'hello world',
                validator: value => ['Google', 'Microsoft', 'Sales force', 'Amazon'].includes(value)
            }
        },

        data: () => ({
            organizations: [
                { url: '', name: '', title: '' }
            ],
        }),

        methods: {
            onOrganizationsChange(after, before) {
                if (after.length === before.length) {
                    return console.log("No Company was removed from organizations");
                }

                let missing_company = before.reduce((found, company) => this.

                    names.includes(company.name) && found === false
                        ? company
                        : found

                    ,let default_found_value = false
                );

                return console.log(
                    `Removed ${missing_company.name} from organizations: `,
                    { ...missing_company }
                );

        },

        computed: {
            names() {
                return this.organizations.reduce((names, ({ name }) => [name, ...names], []);
            }
        },

        watch: {
            organizations: {
                deep: true,
                immediate: false,
                handler: 'onOrganizationsChanged'
            }
        },
    };
</script>
```
