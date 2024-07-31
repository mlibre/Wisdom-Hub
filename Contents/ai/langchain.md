---
sidebar_position: 5
tags:
  - Linux
  - langchain
  - ai
---


# Langchain

LangChain is a framework for developing applications powered by language models

## Install

```bash
python -m venv .venv
source .venv/bin/activate

pip install --upgrade pip
pip install langchain
pip install langchain[llms]
pip install langchain[all]
pip install huggingface_hub
```

## Simple huggingface example

```python
from langchain.llms import HuggingFaceHub
from langchain import PromptTemplate, LLMChain
import os

os.environ["HUGGINGFACEHUB_API_TOKEN"] = "hf_n"

template = """Question: {question}

Answer: Let's think step by step."""

prompt = PromptTemplate(template=template, input_variables=["question"])

repo_id = "tiiuae/falcon-40b"
llm = HuggingFaceHub(
    repo_id=repo_id, model_kwargs={"temperature": 0.5, "max_length": 64}
)

question = "Who won the FIFA World Cup in the year 1994? "

llm_chain = LLMChain(prompt=prompt, llm=llm)
print(llm_chain.run(question))
print("done")
```

## References

> <https://python.langchain.com/docs/get_started/introduction.html>
> <https://github.com/langchain-ai/langchain>
