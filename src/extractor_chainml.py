from council.chains import Chain
from council.skills import LLMSkill
from council.llm import OpenAILLM, LLMMessage
from council.controllers import LLMController
from council.evaluators import LLMEvaluator
from council.agents import Agent
from council.filters import BasicFilter
from council.prompt import PromptBuilder
from council.skills import SkillBase, LLMSkill, PromptToMessages
from string import Template
from council.contexts import SkillContext, Budget, LLMContext
from council.contexts import AgentContext, ChatHistory

from typing import List

import boto3
import toml
import dotenv

dotenv.load_dotenv()
openai_llm = OpenAILLM.from_env()


SYSTEM_MESSAGE = toml.load("../prompts/prompt.toml")["system_message"]["prompt"]

PROMPT = toml.load("../prompts/prompt.toml")["main_prompt"]["prompt"]

# with open("../data/example.txt", "r") as f:
#     CONTEXT = f.read()

# def build_context_messages(context: SkillContext) -> List[LLMMessage]:
#     """Context messages function for LLMSkill"""
#     context_message_prompt = PromptToMessages(prompt_builder=PromptBuilder(PROMPT))
#     return context_message_prompt.to_user_message(context)


# _skill = LLMSkill(
#     llm=openai_llm,
#     system_prompt=SYSTEM_MESSAGE,
#     context_messages=build_context_messages,
# )

# hw_chain = Chain(name="Event Extractor", description="Extract", runners=[_skill])

# controller = LLMController(llm=openai_llm, chains=[hw_chain], response_threshold=5)

# evaluator = LLMEvaluator(llm=openai_llm)

# agent = Agent(controller=controller, evaluator=evaluator, filter=BasicFilter())

# print(CONTEXT)
# print('\nGenerating Response...\n')
# # result = agent.execute_from_user_message(CONTEXT)
# # print(result.best_message.message)


# run_context = AgentContext.from_user_message("today is a bright day in the city of Lagos")

# result = agent.execute(run_context)

# print(result.best_message.message)


SYSTEM_MESSAGE = "You are a financial analyst whose job is to answer user questions about $company with the provided context."

PROMPT = """Use the following pieces of context to answer the query.
If the answer is not provided in the context, do not make up an answer. Instead, respond that you do not know.

CONTEXT:
{{CONTEXT}}
END CONTEXT.

QUERY:
{{CONTEXT}}
END QUERY.

YOUR ANSWER:
"""

def build_context_messages(context: SkillContext) -> List[LLMMessage]:
    """Context messages function for LLMSkill"""
    context_message_prompt = PromptToMessages(prompt_builder=PromptBuilder(PROMPT))
    return context_message_prompt.to_user_message(context)


llm_skill = LLMSkill(
    llm=openai_llm,
    system_prompt=SYSTEM_MESSAGE,
    context_messages=build_context_messages,
)


hw_chain = Chain(name="Event Extractor", description="Extract", runners=[llm_skill])

controller = LLMController(llm=openai_llm, chains=[hw_chain], response_threshold=5)

evaluator = LLMEvaluator(llm=openai_llm)

agent = Agent(controller=controller, evaluator=evaluator, filter=BasicFilter())

# print(CONTEXT)
print('\nGenerating Response...\n')
# result = agent.execute_from_user_message(CONTEXT)
# print(result.best_message.message)


run_context = AgentContext.from_user_message("today is a bright day in the city of Lagos")

result = agent.execute(run_context)

print(result.best_message.message)